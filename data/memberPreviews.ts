// Anonymized, illustrative sample profiles — NOT real members. Used only to
// show the shape of the Match Pool. Never populate this with a real member's
// name, photo, or identifying details without explicit consent.

export type MemberPreview = {
  initial: string;
  age: number;
  location: string;
  industry: string;
  languages: string;
  interests: string;
  lookingFor: string;
};

export const memberPreviews: MemberPreview[] = [
  {
    initial: "J",
    age: 29,
    location: "Tokyo → Seoul",
    industry: "Fashion",
    languages: "Japanese, English",
    interests: "Travel · Art · Dining",
    lookingFor: "Serious relationship",
  },
  {
    initial: "S",
    age: 32,
    location: "Seoul",
    industry: "Finance",
    languages: "Korean, English",
    interests: "Golf · Wine · Travel",
    lookingFor: "Marriage-minded",
  },
  {
    initial: "M",
    age: 27,
    location: "Vancouver → Seoul",
    industry: "Marketing",
    languages: "English, Korean",
    interests: "Fitness · Photography",
    lookingFor: "Dating",
  },
  {
    initial: "H",
    age: 34,
    location: "Seoul",
    industry: "Medicine",
    languages: "Korean",
    interests: "Faith · Family · Reading",
    lookingFor: "Marriage",
  },
  {
    initial: "A",
    age: 30,
    location: "Paris → Seoul",
    industry: "Design",
    languages: "French, English, Korean",
    interests: "Architecture · Food · Art",
    lookingFor: "Serious relationship",
  },
  {
    initial: "Y",
    age: 31,
    location: "Seoul",
    industry: "Business Owner",
    languages: "Korean, English",
    interests: "Wellness · Travel",
    lookingFor: "Long-term relationship",
  },
];
