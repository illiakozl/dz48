class SuperMath {
    constructor() {
      this.operations = ['+', '-', '*', '/', '%'];
    }
  
    isValidOperation(operation) {
      return this.operations.includes(operation);
    }
  
    performOperation(X, Y, znak) {
      switch (znak) {
        case '+':
          return X + Y;
        case '-':
          return X - Y;
        case '*':
          return X * Y;
        case '/':
          return X / Y;
        case '%':
          return X % Y;
        default:
          throw new Error('Invalid operation');
      }
    }
  
    check(obj) {
      const { X, Y, znak } = obj;
  
      if (!this.isValidOperation(znak)) {
        console.log('Invalid operation.');
        return;
      }
  
      const confirmation = prompt(`Do you want to perform ${znak} with ${X} and ${Y}? (yes/no)`);
  
      if (confirmation.toLowerCase() === 'yes') {
        try {
          const result = this.performOperation(X, Y, znak);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.log('An error occurred:', error.message);
        }
      } else {
        const newX = parseFloat(prompt('Enter a new value for X:'));
        const newY = parseFloat(prompt('Enter a new value for Y:'));
        const newZnak = prompt('Enter a valid operation (+, -, *, /, %):');
  
        if (!this.isValidOperation(newZnak)) {
          console.log('Invalid operation.');
          return;
        }
  
        const newObj = { X: newX, Y: newY, znak: newZnak };
        this.check(newObj);
      }
    }
  }
  
  // Example usage
  const obj = { X: 12, Y: 3, znak: '/' };
  const mathInstance = new SuperMath();
  mathInstance.check(obj);
  