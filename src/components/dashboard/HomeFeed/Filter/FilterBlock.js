import React, {Component} from 'react'
import styled from 'styled-components'

const FilterBlockWrapper = styled.div`
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    position: relative;
    border-bottom: 0.20px solid rgba(0, 0, 0, 0.9);
    padding-bottom: 5px;

    div {
        display: flex;
        padding: 5px 0;
        font-weight: 700;
    }

    svg {
        width: 1px;
        height: 10px;
        flex: 5%;
        transform: ${props => props.rotation};
        margin: 10px 0;
        transition: all ease 0.2s;
        display: flex;
        justify-content: flex-end;
    }

    span {
        flex: 95%;
        display: flex;
        align-items: center;
    }
`;

const FilterModal = styled.div`
    background-color: white;
    z-index: 1000px;
    padding: 10px;

    ul li {
        padding: 15px 0;
        font-weight: 200;
    }
`;

const INPUT = styled.input`
    padding: 10px;
    margin-bottom: 5px;
`;

class FilterBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        } 
    }

    openModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    sendAction = (el, isTags) => {
        const query = {
            type: this.props.type,
            query: el
        }
        this.props.getActionFromBlock(query);
    }

    renderModal = () => {
        if (this.props.type == 'Date') {
            return (
                <FilterModal style={this.state.isModalOpen ? {display: 'block'} : {display: 'none'}}>
                    <ul>
                        {this.props.options.map((el, ind) => {
                            return <li onClick={(el) => this.sendAction(el.target.textContent)}>{el}</li>
                        })}
                    </ul>
                </FilterModal>
            );
        } else if (this.props.type == 'Location') {
            return (
                <FilterModal style={this.state.isModalOpen ? {display: 'block'} : {display: 'none'}}>
                    <INPUT type="text" onChange={(el) => this.sendAction(el.target.value)}/>
                </FilterModal>
            );
        } else if (this.props.type == 'Tags') {
            return (
                <FilterModal style={this.state.isModalOpen ? {display: 'block'} : {display: 'none'}}>
                    <ul>
                        {this.props.options.map((el, ind) => {
                            return <li onClick={(el) => this.sendAction(el.target.textContent, this.props.type)}>{el}</li>
                        })}
                    </ul>
                </FilterModal>
            );
        }

    }

    render() {
        return (
            <React.Fragment>
                <FilterBlockWrapper 
                rotation={this.state.isModalOpen ? 'rotate(90deg)' : 'rotate(-90deg)'}>
                    <div onClick={(el) => this.openModal()}>
                        <span>{this.props.type}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                    </div>
    
                {this.renderModal()}
                </FilterBlockWrapper>
            </React.Fragment>
        )
    }
}

export default FilterBlock
