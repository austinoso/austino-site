export interface OnboardingData {
  // Step 1: Contact & Online Presence
  name: string;
  email: string;
  businessName: string;
  existingSite: string;
  instagram: string;
  facebook: string;
  otherSocials: string;

  // Step 2: Business Heartbeat
  websiteJob: string;
  websiteJobOther: string;
  secretSauce: string;

  // Step 3: Customers
  phoneFaq: string;
  idealCustomer: string;

  // Step 4: Visual Vibe
  heroStyle: string;
  personality: string;

  // Step 5: Colors & Brand
  colorPalette: string;
  brandColor: string;
  logoFileId: string;
  logoFileName: string;

  // Step 6: Tech & Tools
  currentTools: string[];
  currentToolsOther: string;
  automationWish: string;
}

export const initialData: OnboardingData = {
  name: "",
  email: "",
  businessName: "",
  existingSite: "",
  instagram: "",
  facebook: "",
  otherSocials: "",
  websiteJob: "",
  websiteJobOther: "",
  secretSauce: "",
  phoneFaq: "",
  idealCustomer: "",
  heroStyle: "",
  personality: "",
  colorPalette: "",
  brandColor: "",
  logoFileId: "",
  logoFileName: "",
  currentTools: [],
  currentToolsOther: "",
  automationWish: "",
};

export type OnboardingAction =
  | { type: "SET_FIELD"; field: keyof OnboardingData; value: string }
  | { type: "SET_ARRAY_FIELD"; field: keyof OnboardingData; value: string[] }
  | { type: "HYDRATE"; data: Partial<OnboardingData> }
  | { type: "RESET" };

export function onboardingReducer(
  state: OnboardingData,
  action: OnboardingAction,
): OnboardingData {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ARRAY_FIELD":
      return { ...state, [action.field]: action.value };
    case "HYDRATE":
      return { ...state, ...action.data };
    case "RESET":
      return initialData;
    default:
      return state;
  }
}
