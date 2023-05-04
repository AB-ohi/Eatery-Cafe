import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id} = useParams();
    const detailChef = useLoaderData

    return (
        <div>
            <h1>this is view page {id}</h1>
        </div>
    );
};

export default ViewDetails;