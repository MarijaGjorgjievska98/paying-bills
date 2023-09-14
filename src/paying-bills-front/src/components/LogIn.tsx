import { GoogleLogin } from "@react-oauth/google";
import * as React from "react";

export default function Footer(): React.ReactElement {

    // @ts-ignore
    const responseMessage = (response) => {
        console.log(response);
    };
    // @ts-ignore
    const errorMessage = (error) => {
        console.log(error);
    };
    // if (auth2.isSignedIn.get()) {
    //     var profile = auth2.currentUser.get().getBasicProfile();
    //     console.log('ID: ' + profile.getId());
    //     console.log('Full Name: ' + profile.getName());
    //     console.log('Given Name: ' + profile.getGivenName());
    //     console.log('Family Name: ' + profile.getFamilyName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());
    //   }
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {// @ts-ignore
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />}
        </div>
    )
    
}