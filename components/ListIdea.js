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
}