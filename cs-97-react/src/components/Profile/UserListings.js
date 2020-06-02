import React , { useState}from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import UserItem from './UserItem';


import "./ViewProfile.css";



const UserListings = ({userListings}) => {
    const isValid = userListings.length > 0;
    return(

        isValid ?

        (
        <ScrollToBottom>
            {userListings.map((item, i)=>

                <div className='UserListings' key={i}>

                    <UserItem ItemData={item}/>
                    
                </div>
                

            )}


        </ScrollToBottom>
            

        )

        :

        (
            <p>Looks like you haven't made any listing yet. Go to Listing Form to submit a listing!</p>


        )
    )




}

export default UserListings