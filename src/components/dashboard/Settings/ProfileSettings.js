import React from 'react'
import styled from 'styled-components'
import ButtonToggle from '../../library/Buttons/ButtonToggle'
import TextField from '../../library/Form/TextField'
import UserToken from '../../../services/UserToken';
import axios from 'axios';
import ImageUpload from '../../helpers/ImageUpload'

const SettingsBlockRow = styled.div`
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    span {
        flex: 10%;
        display: block;
    }
`;

const SettingsBlockRowHelper = styled.p`
    font-size: 11px;
    margin-bottom: 30px;
`;

const ImageUploadWrapper = styled.div`
    .fileContainer {
        padding-top: 0px;
    }

    .deleteImage {
        font-family: sans-serif;
        background-color: black;
        margin: 10px;
        padding: 20px;
        transform: scale(0.5);
    }

    .imageUploader {
        margin-top: 20px;
        box-shadow: none;

         .uploadPicturesWrapper .uploadPictureContainer {
             box-shadow: none;
             width: 180px;
             height: 180px;
             padding: 0;
             border: none;
             margin: 0;
             margin-top: 30px;
             border-radius: 300px;

             img {
                width: 100%;
                height: 100%;
                border-radius: 300px;
                object-fit: cover;
             }
         }
    }
`;

const SubmitButton = styled.button`
    width: 160px;
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    font-size: 17px;
    padding: 20px;
    color: black;
    cursor: pointer;
`;

const ProfileSettings = (props) => {
    const [profileBoolean, setProfileBoolean] = React.useState(null);

    const onChange = (el) => {
        console.log(el)
    }

    const sendUserInfoData = (event) => {
        event.preventDefault()
        let formData = new FormData();

        formData.append("newProfileTitle", event.target.elements.newProfileTitle.value);
        formData.append("file", event.target.elements.file.files[0]);
        formData.append("coverImage", event.target.elements.coverImage.files[0]);
        formData.append("privateProfile", profileBoolean);

        console.log(profileBoolean);

        axios.post("http://localhost:8888/odyssey-api/demo_react/api/endpoints/addInformationUser.php?nameUser=" + UserToken('get') , formData)
          .then(response => {
              window.location.reload(false);
          })
          .catch(function (error) {
            alert(error);
          });
    }

    return (
        <form onSubmit={sendUserInfoData}
        encType="multipart/form-data">
            <SettingsBlockRow style={{display: 'flex'}}>
                    <span>Profile privacy</span>
                    <ButtonToggle getButtonToggleState={(stateChild) => setProfileBoolean(stateChild)} optionA="Public" optionB="Private" />
            </SettingsBlockRow>
                <SettingsBlockRowHelper>Setting your profile privacy to private won't show your posts to users that are not your friends.</SettingsBlockRowHelper>
            <SettingsBlockRow>
                    <span>Profile Image</span>
                    <ImageUploadWrapper>
                        <ImageUpload getDateChild={(el) => console.log(el)} />
                    </ImageUploadWrapper>
            </SettingsBlockRow>
            <SettingsBlockRow>
                    <span>Cover Image</span>
                    <ImageUploadWrapper>
                        <ImageUpload customName="coverImage" getDateChild={(el) => console.log(el)} />
                    </ImageUploadWrapper>
            </SettingsBlockRow>
            <SettingsBlockRow>
                    <span>Profile Title</span>
                    <TextField style={{display: 'block'}} onChange={(el) => onChange(el)} name="newProfileTitle" value="asdas" fieldType="text" type="text" label="Profile Title" />
            </SettingsBlockRow>
            <SubmitButton type="submit">Save changes</SubmitButton>
        </form>
    );
}

export default ProfileSettings
