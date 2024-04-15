// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

let bankBranchInstance = null; // This declares a variable. This variable will hold the 'bankBranch' class


class bankBranch {                          // this defines a class 'bankbranch'
    constructor(branchInfo) {               // this is a constructor method of the 'bankBranch',  
        if (!bankBranchInstance) {          // this checks if bankBranchInstance is null
            this.bankInfo = branchInfo;     // if it is, it means no instance of 'bankBranch exists, and it creates one
            bankBranchInstance = this;      // This line assigns the current instance 'this' to the 'bankBranchInstance',
                                            // making it the singleton instance.
        }
        return bankBranchInstance;          // returns the singlton instance    
    }


getBranchInfo() {                           // methos of the 'bankBranch' class, returns 'bankInfo'
    return this.bankInfo;
    }
}
const branchA = new bankBranch("Somewhere Branch")  // creates a new instance of the bankBranch class
console.log(branchA.getBranchInfo());
const branchB = new bankBranch("Nowhere Branch")
console.log(branchB.getBranchInfo());

console.log(branchA === branchB)  // Only one instance of the bankBranch class can exists




// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
