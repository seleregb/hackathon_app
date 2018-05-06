module.exports = {
  getProvinces: () => {
    const provinces = [
      "Display only Federal Programs",
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Northwest Territories",
      "Nunavut",
      "Ontario",
      "Prince Edward Island",
      "Québec",
      "Saskatchewan",
      "Yukon"
    ];

    return provinces;
  },

  getMaritalStatus: () => {
    const status = [
      "Single", "Married", "Separated/Divorced", "Widowed"
    ];
    return status;
  },

  getEmploymentStatus: () => {
    const status = [
      "Employed/ Self-Employed", "Unemployed, seeking work", "Other"
    ];
    return status;
  },

  getHealthStatus: () => {
    const status = [
      "Living with a mental or physical disability",
      "Chronically or seriously ill",
      "Experiencing mental illness",
      "Living with an addiction",
      "In need of counselling",
      "In need of dental surgery, prescription drugs or lenses",
      "In need of medical equipment or other assistance",
      "No health concerns or not applicable"
    ];
    return status;
  },

  getParentalStatus: () => {
    const status = [
      "Yes",
      "I am adopting or I am a foster parent",
      "I am expecting",
      "No"
    ];
    return status;
  },

  getEducationStatus: () => {
    const status = [
      "A Student", "Planning to return to school", "Not planning to return to school"
    ];
    return status;
  },

  getHousingStatus: () => {
    const status = [
      "Homeowner", "Renting", "Residing in an assited residence facility", "Other"
    ];
    return status;
  },

  getHousingInterest: () => {
    const interest = [
      "Purchasing a home",
      "Renting",
      "Residing in an assisted living facility",
      "Making repairs or other modifications to your home or building",
      "None of the above"
    ];
    return interest;
  },

  getImmediateFamilyLivingStatus: () => {
    const status = [
      "Spouse",
      "Parent(s)",
      "Child(ren)",
      "No, but a family member is gravely ill and at risk of dying",
      "None of the above"
    ];
    return status;
  },

  getCurrentStance: () => {
    const stance = [
      "a newcomer to Canada",
      "an apprentice",
      "in need of legal help",
      "interested in starting a business",
      "receiving or repaying student loans",
      "an Aboriginal person",
      "interested in training and career counselling",
      "considering separation / divorce",
      "living in a rural or remote area",
      "a veteran",
      "a fisher",
      "a health care worker",
      "a victim of crime",
      "none of the above"
    ];
    return stance;
  },

  getAgeOfChildren: () => {
    const ages = [
      "Less than 12 months old",
      "Between the ages of 1 and 6",
      "Between the ages of 7 and 12",
      "Between the ages of 13 and 17",
      "18 years of age or older",
      "My child or children are independent",
      "No child / Does not apply"
    ];
    return ages;
  },

  getChildrenHealthStatus: () => {
    const health_status = [
      "Living with a mental or physical disability",
      "Chronically or seriously ill",
      "Experiencing mental illness",
      "Living with an addiction",
      "In need of counselling",
      "In need of dental surgery, prescription drugs or lenses",
      "In need of medical equipment or other assistance",
      "No health concerns or not applicable"
    ];

    return health_status;
  }
};
