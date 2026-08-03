// ======================================================
// Exercise 1: Ticket Price Calculator
// ======================================================

// Original attempt preserved for my teacher:
//
// function getTicketPrice(age) {
//     if (age < 12) {
//         return "Child $8;";
//     } else if (age > 65) {
//         return "Senior $10";
//     } else if (age >= 13 && age <= 64) {
//         return "Adult $15";
//     } else {
//         return "Invalid age";
//     }
// }

// Corrected version:
function getTicketPrice(age) {
    if (age < 0 || age > 120) {
        return "Invalid age";
    } else if (age <= 12) {
        return "Child $8";
    } else if (age >= 65) {
        return "Senior $10";
    } else {
        return "Adult $15";
    }
}

console.log("--- Ticket Price Calculator ---");
console.log(getTicketPrice(8));  // Child $8
console.log(getTicketPrice(15)); // Adult $15
console.log(getTicketPrice(70)); // Senior $10
console.log(getTicketPrice(-5)); // Invalid age


// ======================================================
// Exercise 2: Grade Calculator
// ======================================================

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

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log("\n--- Check Number ---");
console.log(checkNumber(8));  // Positive
console.log(checkNumber(-3)); // Negative
console.log(checkNumber(0));  // Zero


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

function calculateFinalPrice (basePrice, memberTier, isHoliday) {
    let finalPrice = basePrice;
    let discount =0;
    if (basePrice <= 0 || typeof basePrice !== "number") {
        return "Invalid base price";
    }
      else if (memberTier ==="VIP") { 
      if (isHoliday) {finalPrice*=0.05}
        finalPrice *= 0.2; // 20% discount for VIP members
    }
     else if (memberTier === "gold") {
           if (isHoliday) {finalPrice*=0.05} 
        finalPrice *= 0.1; // 10% discount for gold members
    }
      else if (memberTier === "regular") {
           if (isHoliday) {finalPrice*=0.05} 
       
    }
     else {
        discount=baseprice-finalPrice;
          if (discount >= 50) {
            return "Free shipping for client";
          }
     }


    