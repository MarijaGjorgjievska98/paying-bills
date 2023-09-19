import { GoogleLogin } from "@react-oauth/google";
import * as React from "react";
import { useEffect } from "react";
import { useAuthContext } from "./User/UserContex";
import { Link, useNavigate } from "react-router-dom";
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, useMutation } from "react-relay";
import { LogInQuery as LogInQueryType } from "./__generated__/LogInQuery.graphql";
import { LogInOperatorsQuery as LogInOperatorsQuerType } from "./__generated__/LogInOperatorsQuery.graphql";


const LogInQuery = graphql`
  query LogInQuery{
    usersEmails {
      email
    }
  }
`;

const LogInOperatorsQuery = graphql `
query LogInOperatorsQuery{
    operators
    {
        name
        email
        regExForamount
        regExForInvoce
        regExForpaymentDeadline
    }
}
`;


const LogInMutation = graphql`
  mutation LogInMutation(
    $email: String!
  ) {
    addUser(
      email: $email
    ) { 
        id
    }
  }
`;

// const LogInUpdateMutation = graphql`
//   mutation LogInUpdateMutation(
//     $lastLogIn: String!
//   ) {
//     updateLastLogIn(
//         lastLogIn: $lastLogIn
//     ) { 
//         firstName
//       lastName
//       email
//       phone
//       thumbnailUrl
//     }
//   }
// `;

export default function Footer(): React.ReactElement {

    const { email, setEmail } = useAuthContext();
    const data = useLazyLoadQuery<LogInQueryType>(
        LogInQuery,{});

    const operatorsData = useLazyLoadQuery<LogInOperatorsQuerType>(
        LogInOperatorsQuery,{});
    
    const [emails, setEmails] = React.useState(data.usersEmails); 
    const [operators, setOperators] = React.useState(operatorsData.operators); 

    console.log(data.usersEmails);
    const navigate = useNavigate();
    const [commitMutationAddUser, isMutationAddUserInFlight] = useMutation(LogInMutation);
    // const [commitMutationUpdateUser, isMutationUpdateUserInFlight] = useMutation(LogInUpdateMutation);


    const CLIENT_ID =
        '841336281724-lckd7s10romgksnpp60uijmbv417k2jb.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyC1EZghRJjaIwO4aUOo1kN-BSDVBVtGipA';

    // Discovery doc URL for APIs used by the quickstart
    const DISCOVERY_DOC =
        'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile";
    // @ts-ignore
    let tokenClient;
    let gapiInited = false;
    let gisInited = false;

    useEffect(() => {
        gapiLoaded();
        gisLoaded();
    })

    function b64DecodeUnicode(string: string) {
        return decodeURIComponent(Array.prototype.map.call(atob(string.replace(/_/g, '/').replace(/-/g, '+')), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    }
    /**
     * Callback after api.js is loaded.
     */
    function gapiLoaded() {
        /* global google */
        // @ts-ignore
        gapi.load('client', initializeGapiClient);
    }

    /**
     * Callback after the API client is loaded. Loads the
     * discovery doc to initialize the API.
     */
    async function initializeGapiClient() {
        /* global google */
        // @ts-ignore
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
    }
    /**
     * Callback after Google Identity Services are loaded.
     */

    function gisLoaded() {
        /* global google */
        // @ts-ignore
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
        });
    }
    /**
     *  Sign in the user upon button click.
     */

    function handleAuthClick() {
        /* global google */
        // @ts-ignore
        tokenClient.callback = async (resp) => {
            if (resp.error !== undefined) {
                throw resp;
            }
            // await listLabels();
            await getDataForUser();
        };

        /* global google */
        // @ts-ignores
        if (gapi.client.getToken() === null) {
            // Prompt the user to select a Google Account and ask for consent to share their data
            // when establishing a new session.
            // @ts-ignore
            tokenClient.requestAccessToken({ prompt: 'consent' });
        } else {
            // Skip display of account chooser and consent dialog for an existing session.
            // @ts-ignore
            tokenClient.requestAccessToken({ prompt: '' });
        }
    }

    /**
     *  Sign out the user upon button click.
     */
    function handleSignoutClick() {
        /* global google */
        // @ts-ignore
        const token = gapi.client.getToken();
        if (token !== null) {
            // @ts-ignore

            google.accounts.oauth2.revoke(token.access_token);
            // @ts-ignore

            gapi.client.setToken('');
        }
        setEmail(null);
        navigate('/');
    }

    async function getDataForUser() {
        // go imam mailot
        /* global google */
        // @ts-ignore
        let response;
        try {
            // @ts-ignore
            response = await gapi.client.gmail.users.getProfile({
                userId: 'me',
            });
        } catch (err) {
            // @ts-ignore
            console.log(err.message);
            return;
        }
        setEmail(response.result.emailAddress);
        if (response.result.emailAddress) {
            let flag = true;
            emails?.forEach( e => {
            // @ts-ignore
                if(e.email == response.result.emailAddress)
                {
                    flag = false;
                }
            });
            if (!flag) {
                // update
                // commitMutationUpdateUser({variables:{new Date()}})
            }
            else {
                commitMutationAddUser({
                    variables: {
                        email: response.result.emailAddress
                    },
                })
                console.log("added mutation");
            }
            // read mejlovi

            try {
            // @ts-ignore
            response = await gapi.client.gmail.users.messages.list({
                userId: 'me',
                q: 'from: m.gorgi47@yahoo.com',
            });
        } catch (err) {
            // @ts-ignore

            console.log(err.message);
            return;
        }

        // ""
        console.log('all of the mails: ');
        console.log(response);
        // @ts-ignore

        response.result.messages.forEach((element) => {
            try {
                // @ts-ignore

                let message = gapi.client.gmail.users.messages.get({
                    userId: 'me',
                    id: element.id,
                });
                // @ts-ignore
                message.execute(function (response) {
                    if (response?.result?.payload?.parts[0]?.body?.data) {
                        let messageData = response.result.payload.parts[0].body.data;
                        const decodedMessage = b64DecodeUnicode(messageData); // Decode from base64
                        console.log(decodedMessage);




                    } else {
                        console.error('Error retrieving message:', response.error);
                    }
                });
            } catch (err) {
                // @ts-ignore

                console.log(err.message);
                return;
            }
        });

        }
        else {
            console.log("there was na error with the log in")
        }



        // da vidam dali imam user so toj mail
    }


    return (
        <div>
            {!email
                ? <button id="authorize_button" className="btn btn-success" onClick={handleAuthClick}>Sign in with Gmail</button>
                : <Link id="signout_button" className="float-right text-decoration-none  d-flex dropdown-item" onClick={handleSignoutClick} to="/">Sign Out</Link>
            }
        </div>
    )

}