import { Form, Label,Input,Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { ethers } from "ethers";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Vote from "../../ethereum/artifacts/contracts/Vote.sol/vote.json"
import { Router } from "../../routes";

const Voteaddress = "0x1793831008Ec37F053d6e465be0a06d5e3B61683";
function Contribute() {
  async function onSubmit() {
    if (typeof window.ethereum !== "undefined") {
        //   const account = await ethers.getSigners();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const voteContract = new ethers.Contract(Voteaddress, Vote.abi, signer);
        const contribute = await voteContract.contribute({ value: ethers.utils.parseEther(`${value}`) });
        await contribute.wait();
        Router.pushRoute('/')
        //   await voteContract.mess().call();
      }
  }
  const [value, setValue] = useState();
  return (
    <Layout>
      <div>
        <Form onSubmit={onSubmit}>
          <h3>Contribute here to become a customer (Minimum = (1e-16)ethers )</h3>
          <Input onChange={(event) => setValue(event.target.value)} />
          <h3>{value}</h3>
          <Button type="submit" content="CONTRIBUTE" />
        </Form>
      </div>
    </Layout>
  );
}
export default Contribute;
