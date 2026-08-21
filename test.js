

function getLetterGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n--- Grade Calculator ---");
console.log(getLetterGrade(95));  // A
console.log(getLetterGrade(82));  // B
console.log(getLetterGrade(43));  // F
console.log(getLetterGrade(120)); // Invalid score


// ======================================================
// Exercise 3: Driving Age
// ======================================================

function checkDrivingAge(age) {
    if (age < 0 || age > 120) {
        return "Invalid age";
    } else if (age >= 16) {
        return "Old enough to drive";
    } else {
        return "Too young to drive";
    }
}

console.log("\n--- Driving Age ---");
console.log(checkDrivingAge(20)); // Old enough to drive
console.log(checkDrivingAge(14)); // Too young to drive
console.log(checkDrivingAge(-2)); // Invalid age


// ======================================================
// Exercise 4: Store Hours
// ======================================================

function isStoreOpen(hour) {
    if (hour < 0 || hour > 23) {
        return "Invalid hour";
    } else if (hour < 9 || hour > 17) {
        return "Store is closed";
    } else {
        return "Store is open";
    }
}

console.log("\n--- Store Hours ---");
console.log(isStoreOpen(14)); // Store is open
console.log(isStoreOpen(8));  // Store is closed
console.log(isStoreOpen(18)); // Store is closed
console.log(isStoreOpen(25)); // Invalid hour


// ======================================================
// Exercise 5: Positive, Negative, or Zero
// ======================================================



// ======================================================
// Exercise 6: Voting Age
// ======================================================

function canVote(age) {
    if (age < 0 || age > 120) {
        return "Invalid age";
    } else if (age < 18) {
        return "Cannot vote";
    } else {
        return "Can vote";
    }
}

console.log("\n--- Voting Age ---");
console.log(canVote(22)); // Can vote
console.log(canVote(16)); // Cannot vote
console.log(canVote(-5)); // Invalid age


// ======================================================
// Exercise 7: Workout Goal
// ======================================================

function getWorkoutPlan(goal) {
    if (goal === "strength") {
        return "3 to 5 reps";
    } else if (goal === "muscle") {
        return "8 to 12 reps";
    } else if (goal === "endurance") {
        return "15 to 20 reps";
    } else {
        return "Invalid goal";
    }
}

console.log("\n--- Workout Goal ---");
console.log(getWorkoutPlan("strength"));  // 3 to 5 reps
console.log(getWorkoutPlan("muscle"));    // 8 to 12 reps
console.log(getWorkoutPlan("endurance")); // 15 to 20 reps
console.log(getWorkoutPlan("weight loss")); // Invalid goal

function calculateFinalPrice(basePrice, memberTier, isHoliday) {
    let finalPrice = basePrice;
    let discount = 0;

    if (basePrice <= 0 || typeof basePrice !== "number") {
        return "Invalid base price";
    } else if (memberTier === "VIP") {
        finalPrice *= 0.8;
    } else if (memberTier === "gold") {
        finalPrice *= 0.9;
    } else if (memberTier === "regular") {
        finalPrice = basePrice;
    }

    if (isHoliday) {
        finalPrice *= 0.95;
    }

    discount = basePrice - finalPrice;

    if (discount >= 50) {
        return "Free shipping for client";
    } else {
        return finalPrice + 10;
    }
}


function calculateDiscount(price, isMember) {
    if (price <= 0 || typeof price !== "number") {
        return "Invalid price";
    } else if (isMember === true) {
        return price * 0.8;
    } else {
        return price * 0.9;
    }
}

console.log(calculateDiscount(100, true));
console.log(calculateDiscount(100, false));
console.log(calculateDiscount(0, true));





function checkAge(age) {
    if (age < 13) {
        return "Child";
    } else if (age < 18) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

console.log(checkAge(10));
console.log(checkAge(15));
console.log(checkAge(25));

function checkGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(checkGrade(95));
console.log(checkGrade(85)); 
console.log(checkGrade(75)); 
console.log(checkGrade(60)); 

function getTicketPrice(age) {
    if (age < 13) {
        return 8;
    }

    if (age >= 65) {
        return 10;
    }

    return 15;
}

function classifyNumber(number) {
    if (number > 0) {
        return "Positive";
    }

    if (number < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log(classifyNumber(10));
console.log(classifyNumber(-4));
console.log(classifyNumber(0));

function checkLogin(username, password) {
    if (username === "admin" && password === "javascript123") {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

console.log(checkLogin("admin", "javascript123")); // Access granted
console.log(checkLogin("admin", "wrongpassword")); // Access denied
console.log(checkLogin("Brandon", "javascript123")); // Access denied



function getTemperatureAdvice(temp) {
    if (temp > 100 || temp < -50) {
        return "Invalid temperature";
    } else if (temp >= 85) {
        return "Very hot";
    } else if (temp >= 70) {
        return "Warm";
    } else if (temp >= 50) {
        return "Cool";
    } else {
        return "Cold";
    }
}

console.log(getTemperatureAdvice(90));  // Very hot
console.log(getTemperatureAdvice(75));  // Warm
console.log(getTemperatureAdvice(55));  // Cool
console.log(getTemperatureAdvice(30));  // Cold
console.log(getTemperatureAdvice(150)); // Invalid temperature

function getShippingCost(orderTotal) {
    if (orderTotal < 0) {
        return "Invalid order total";
    } else if (orderTotal >= 100) {
        return 0;
    } else if (orderTotal >= 50) {
        return 5;
    } else {
        return 10;
    }
}

console.log(getShippingCost(120)); // 0
console.log(getShippingCost(75));  // 5
console.log(getShippingCost(30));  // 10
console.log(getShippingCost(-10)); // Invalid order total

function calculateWeeklyPay(hoursWorked, hourlyRate) {
    if (hoursWorked < 0 || hourlyRate < 0) {
        return "Invalid input";
    } else if (hoursWorked <= 40) {
        return hoursWorked * hourlyRate;
    } else {
        const regularPay = 40 * hourlyRate;
        const overtimeHours = hoursWorked - 40;
        const overtimeRate = hourlyRate * 1.5;
        const overtimePay = overtimeHours * overtimeRate;

        return regularPay + overtimePay;
    }
}

console.log(calculateWeeklyPay(40, 20)); // 800
console.log(calculateWeeklyPay(48, 20)); // 1040
console.log(calculateWeeklyPay(35, 20)); // 700
console.log(calculateWeeklyPay(-5, 20)); // Invalid input

const users = [
    { name: "admin", password: "javascript123" },
    { name: "user1", password: "password1" },
    { name: "user2", password: "password2" },
];
const data = [1,2,3]

function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function getLargerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1; 
    }
}



console.log(getLargerNumber(10, 20)); 
console.log(getLargerNumber(50, 12)); 
console.log(getLargerNumber(7, 7));  


console.log(isEven(8));
console.log(isEven(9));
console.log(isEven(20));
console.log(isEven(17));

function getSmallerNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else if (num2 < num1) {
        return num2;
    } else {
        return num1;
    }
}

console.log(getSmallerNumber(10, 20));
console.log(getSmallerNumber(50, 12));
console.log(getSmallerNumber(7, 7));

function checkPasswordLength(password) {
    if (password.length < 8) {
        return "Password too short";
    } else {
        return "Password accepted";
    }
}

console.log(checkPasswordLength("hello"));
console.log(checkPasswordLength("javascript"));

function calculateTip(bill, service) {
    if (service === "good") {
        return bill * 0.20;
    } else if (service === "average") {
        return bill * 0.15;
    } else if (service === "bad") {
        return bill * 0.10;
    } else {
        return "Invalid service";
    }
}

console.log(calculateTip(100, "good"));
console.log(calculateTip(100, "average"));
console.log(calculateTip(100, "bad"));
console.log(calculateTip(100, "terrible"));