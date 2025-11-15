// Superclass RBI
class RBI {
    rate_of_Interest: number = 10;

    roi(): number {
        return this.rate_of_Interest;
    }
}

// Subclass BankX extends RBI
class BankX extends RBI {
    roi(): number {
        return 12; // Overridden rate of interest
    }
}

// Subclass BankY extends RBI
class BankY extends RBI {
    roi(): number {
        return 16; // Overridden rate of interest
    }
}

// Create objects and call roi()
const x = new BankX();
console.log("Bank X charges loan interest rate: " + x.roi());

const y = new BankY();
console.log("Bank Y charges loan interest rate: " + y.roi());
