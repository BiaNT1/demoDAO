pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract vote{
    address public manager;
    string private message;
    uint public totalTokens;
    address[] public customers;
    mapping(address => uint) balances;
    person[] public Person;
    uint private miniMum;
    Idea[] public arIdea;
    struct person {
        address adPerson;
        uint amount; //So tien da dong gop
    }
    struct Idea{
        string nameIdea;
        uint views;
        uint total;
        address recipient;
        uint percent;
    }
    constructor(string memory _message, uint _miniMum) {
        console.log(_message, _miniMum);
        message = _message;
        miniMum = _miniMum;        
        manager = msg.sender;
        
    }
    function mess() public view returns (string memory) {
        console.log(message);
        return message;
    }
    function mini() public view returns (uint) {
        console.log(miniMum);
        return miniMum;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }    
    function createIdea(string memory nameIdea, address _recipient ) public restricted {
        Idea memory ideaCreated = Idea({
            nameIdea: nameIdea,
            views: 0,
            total: 0,
            recipient: _recipient,
            percent: 0
        });
        arIdea.push(ideaCreated);
    }
    function contribute() public payable {    
        require(msg.value >= miniMum);              
        customers.push(msg.sender);
        payable(manager).transfer(miniMum);        
    }
    function approveIdea(uint index, uint amount) public  {
        balances[msg.sender] += amount;
        Idea storage newidea = arIdea[index];        
        newidea.views++;
        newidea.total+=amount;
        totalTokens+=amount;
        payable(newidea.recipient).transfer(amount);
        newidea.percent = (100*newidea.total)/totalTokens;     
    }
    function balanceOf(address _owner) public view returns (uint) {
        return balances[_owner];
    }
    function getCustomers() public view returns (address[] memory) {
        return customers;
    }
    function getListIdea() public view returns (Idea[] memory) {
        return arIdea;
    }
    
}