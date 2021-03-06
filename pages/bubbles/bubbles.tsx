import React from "react";
import BubbleWrap from "../../components/bubblewrap";
import Head from "next/head";
import Button from "@mui/material/Button";

function bubbles() {
    return (
        <>
            <Head>
                <title>Bubbles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BubbleWrap many={810} toggle={false} text="cool" />
        </>
    );
}

export default bubbles;