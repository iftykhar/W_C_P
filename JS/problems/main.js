//problem 01 
// Sarah has 25 Apples and She bought 15 apples from shop. How many apples does sarah have?

let SarahHas = 25;
let SarahBought = 15;
let ToatlApple = SarahHas + SarahBought;
let AppleResult = "Sarah Has"+" "+ToatlApple+" "+"Apples"+".";
console.log(AppleResult);

// Problem 02
//  Jhon has 500 tk. He spend 200 tk. How much does Jhon has?

let JhonHas = 500;
let JhonSpent = 200;
let JhonTotal = JhonHas - JhonSpent;
let JhonMoney = "Jhon Has"+" "+JhonTotal+" "+"Tk.";
console.log(JhonMoney);

// Problem 03 
// Factory makes 120 machine per hour. How many machines can be made in 8 hours?

let MachinePerHour = 120;
let TotalMachine = 8 * MachinePerHour;
let MachineResult = "Total"+" "+TotalMachine+" "+"in 8 Hour.";
console.log(MachineResult);

// Problem 04
// Garden has 12 trees per row.And has total 8 rows. Owner wants to plant 20 more trees.
//How many trees in total?

let TreePerRow = 12;
let OldTreeNum = 8 * TreePerRow;
let TotalTrees = 20 + OldTreeNum;
let TreeResult = "Total Trees" + " " + TotalTrees + " " +  "in the Garden.";

console.log(TreeResult);

// Problem 05
// Rahim has 5 boxes, each box has 10 oranges. He gave 12 to a friend. How many does he have?

let RahimHasBox = 5;
let OrangePerBox = 10;
let GivenAway = 12;
let totalOrange = (RahimHasBox * OrangePerBox) - GivenAway;
let OrangeResult = "There are"+" "+totalOrange+" "+"left for Rahim.";

console.log(OrangeResult);

// Problem 06
// A Train Travels 150 Km in 3 hours. How many killometers does it travel in one hour?

let TravelDistance = 150;
let Hour = 3;
let kmPerHour = TravelDistance/Hour;
let TrainResult = "The Train Travels"+" "+kmPerHour+" "+"killometer in one hour.";
console.log(TrainResult);

// Problem 07
// A Factory makes 200 product by using 6 machines.If 2 more machine added how many product can be made?
// if 3 products is not sold how many product is there?

let machineNum = 6;
let ProductMade = 200;
let MachineAdd = 2;
let ProductPerMachine = ProductMade / machineNum;
let totalProductByMachine = Math.round((machineNum + MachineAdd) * ProductPerMachine);
let TotalProduct = 3 + totalProductByMachine;
let ProductResult = "Total Product by Machine is"+" "+totalProductByMachine+" "+"if 3 more product is not sold then the count is"+" "+TotalProduct;
console.log(ProductResult);

// Problem 08
// A shop Owner bought 120 chocolate and packaged 9 chocolates per packet. How many will be left after filling all packets?

let chocolates = 120;
let ChocsPerPack = 9;
let PackNum = Math.round(chocolates/ChocsPerPack);
let PackChocsTotal = PackNum * ChocsPerPack;
let ChocsLeft = chocolates - PackChocsTotal;
let chocolateResult = "After Filling all packets there are only"+" "+ChocsLeft+" "+"chocolates left.";
console.log(chocolateResult);
