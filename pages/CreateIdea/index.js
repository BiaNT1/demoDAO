import React, { Component } from "react";
import { Button, Form, Input, h3 } from "semantic-ui-react";
import Layout from "../../components/Layout";
import "semantic-ui-css/semantic.min.css";
import { ethers } from "ethers";
import { useState } from "react";
import Vote from "../../ethereum/artifacts/contracts/Vote.sol/vote.json";


const Voteaddress = "0x1793831008Ec37F053d6e465be0a06d5e3B61683";
// const hre = require('hardhat')
function CreateIdea() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState('');
  async function onSubmit() {
    if (typeof window.ethereum !== "undefined") {
      //   const account = await ethers.getSigners();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const voteContract = new ethers.Contract(Voteaddress, Vote.abi, signer);
      const createIdea = await voteContract.createIdea(title, address);
      console.log(voteContract);
      // await createIdea.wait();      
      //   await voteContract.mess().call();
    }    
  }
  return (
    <Layout>
      <div>
        <Form onSubmit={onSubmit}>
          <h3>CREATE IDEA FOR OWNER</h3>
          <Input onChange={(event) => setTitle(event.target.value)} />
          <Input onChange={event => setAddress(event.target.value)}/>
          <h3>{title}</h3>
          <h3>{address}</h3>
          <Button type="submit" content="CREATE" />
        </Form>
      </div>
    </Layout>
  );
}

export default CreateIdea;
