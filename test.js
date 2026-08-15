

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