import Head from "next/head";
import Image from "next/image";
import { ethers } from "ethers";
import ListIdea from "../components/ListIdea";
import { useState } from "react";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { Button, Card, Form, Input } from "semantic-ui-react";
import { Link } from "../routes";
import Contract from "../components/votecontract";
import Vote from "../ethereum/artifacts/contracts/Vote.sol/vote.json";

const Voteaddress = "0x1793831008Ec37F053d6e465be0a06d5e3B61683";
const Home = () => {
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function onClick() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
    }
  }
  return (
    <Layout>
      <div>
        <div>
          <h3>List customer</h3>
        </div>
      </div>
      <div className={styles.container}>
        <Button onClick={onClick} floated="right">
          Connect MetaMask
        </Button>
      </div>
      <div>
        <listCustomer />
      </div>
    </Layout>
  );
};
const listCustomer = async () => {
  if (typeof window.ethereum !== "undefined") {
    //   const account = await ethers.getSigners();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const voteContract = new ethers.Contract(Voteaddress, Vote.abi, signer);
    const listCustomer = await voteContract.getCustomers();
    return (
      <ul>
        <li>Hello</li>
      </ul>
    );
  }
};

export default Home;
