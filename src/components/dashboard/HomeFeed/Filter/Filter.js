import React, {Component} from 'react'
import styled from 'styled-components'
import FilterBlock from './FilterBlock'

const FilterMain = styled.div`
    max-width: 550px;
    margin: 30px auto;
    border-radius: 5px;
    padding: 10px;
`;

const FilterHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
    cursor: pointer;
`;

const CloseFilter = styled.svg`
    flex: 5%;
    height: 10px;
    display: flex;
    justify-content: flex-end;
    transform: ${props => props.rotation};
    transition: all ease 0.2s;
    padding: 10px 0;

`;

const FilterHeaderTitle = styled.div`
        flex: 10%;
`;

const FilterActiveTags = styled.div`
    flex: 85%;
    display: flex;
`;

const ActiveTag = styled.div`
    font-size: 11px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    padding: 5px 0;
    height: 10px;

    span {
        flex: 90%;
        padding-left: 10px;
    }

    svg {
        fill: white;
        padding: 5px;
        transform: scale(0.6);
    }
`;

const FilterContent = styled.div`
    display: ${props => props.activate};
`;

const UpdateResults = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: block;
    margin: 30px auto;
    text-align: center;
    background: black;
    color: white;
    width: 30%;
    border-radius: 5px;
    cursor: pointer;
`;

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterActive: false,
            finalQuery: []        
        } 
    }

    activateFilter = () => {
        this.setState({filterActive: !this.state.filterActive})
    }

    getSortingAction = (el) => {
        
        const mutatedState = this.state.finalQuery;

        mutatedState.forEach((stateArr, ind, obj) => {
            if (stateArr.type == el.type) {
                obj.splice(ind, 1);
            }
        })
        mutatedState.push(el);
        this.setState({finalQuery: mutatedState});
    }

    removeFilterTag = (query) => {
        console.log(query)
        const mutatedState = this.state.finalQuery;
        
        mutatedState.forEach((el, ind, obj) => {
            if (el.query == query) {
                obj.splice(ind, 1)
            }
        })

        this.setState({finalQuery: mutatedState});
        console.log(this.state.finalQuery);
    }

    renderFilterTags = () => {
        const mutatedState = this.state.finalQuery;
        return mutatedState.map((el, ind) => {
                if (el.query.length > 15) {
                    console.log(el.query.length);
                    el.query = el.query.substring(0, 10) + '...';
                }

                return (
                    <ActiveTag onClick={() => this.removeFilterTag(el.query)}>
                        <span>{el.query}</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
                    </ActiveTag>
                )
            })
    }

    render() {

        return (
            <React.Fragment>
                <FilterMain>
                    <FilterHeader >
                        <FilterHeaderTitle>Filter</FilterHeaderTitle>
                        <FilterActiveTags>
                            {this.renderFilterTags()}
                        </FilterActiveTags>
                        <CloseFilter 
                        onClick={this.activateFilter}
                        rotation={this.state.filterActive ? 'rotate(90deg)' : 'rotate(-90deg)'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></CloseFilter>
                    </FilterHeader>
                    <FilterContent activate={this.state.filterActive ? 'block' : 'none'}>
                        <FilterBlock getActionFromBlock={(el) => this.getSortingAction(el)} type="Date" options={['Order by newest', 'Order by oldest']}/>
                        <FilterBlock options={['Near me']} getActionFromBlock={(el) => this.getSortingAction(el)} type="Location"/>
                        <FilterBlock options={['Travel', 'Test']} getActionFromBlock={(el) => this.getSortingAction(el)} type="Tags"/>
                    </FilterContent>
                </FilterMain>
            {this.state.filterActive ? <UpdateResults onClick={() => this.props.sendFinalQuery(this.state.finalQuery)}>Update results</UpdateResults> : null}
            </React.Fragment>
        )
    }
}

export default Filter
