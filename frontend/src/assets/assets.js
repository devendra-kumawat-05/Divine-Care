import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./divine-care-high-resolution-logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James is a highly skilled General physician with over 4 years of experience. He is passionate about patient care and is known for his compassionate approach to treating patients. Outside of medicine, Dr. James enjoys hiking and traveling.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson is a dedicated Gynecologist, specializing in women's health. With a warm and friendly demeanor, she creates a comfortable environment for young patients and their families.She is committed to providing comprehensive care to women of all ages, with a focus on reproductive health and wellness.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Sarah Patel is a compassionate dermatologist who specializes in skin cancer prevention and treatment.He is passionate about educating patients on the importance of sun protection and skin health. Dr. Sarah is also involved in clinical research to develop innovative skincare treatments. Outside of work, he loves painting and gardening.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is a dedicated pediatrician who has a special interest in childhood development and immunization. With a warm and friendly demeanor, he creates a comfortable environment for young patients and their families. In his free time, he enjoys volunteering at local schools.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is a respected neurologist with a deep expertise in treating conditions of the brain and nervous system. She is known for his analytical approach to diagnosis and her empathetic manner with patients. Dr. Garcia dedicates her time to research on neurological disorders, aiming to develop more effective treatments. In her spare time, she enjoys reading.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams is a respected neurologist with a deep expertise in treating conditions of the brain and nervous system. He is known for his analytical approach to diagnosis and his empathetic manner with patients.In his spare time, he enjoys playing chess.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis is a highly skilled General physician. He is passionate about patient care and is known for his compassionate approach to treating patients. Outside of medicine, Dr. James enjoys reading and traveling.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is an experienced gynecologist.He is committed to providing comprehensive care to all, with a focus on reproductive health and wellness. Dr. White is also a strong advocate for mental health awareness.When not practicing medicine, he loves travelling and spending time with her family.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Ava Mitchell is a compassionate dermatologist who specializes in skin cancer prevention and treatment. She is passionate about educating her patients on the importance of sun protection and skin health. Dr. Mitchell is also involved in clinical research to develop innovative skincare treatments. Outside of work, she loves painting and gardening.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is a dedicated pediatrician who is experienced and have aspecial interest in childhood development and immunization. With a warm and friendly demeanor, he creates a comfortable environment for young patients and their families. In his free time, he enjoys travelling and volunteering at local schools.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zoe Kelly is a respected neurologist with a deep expertise in treating conditions of the brain and nervous system. She is known for his analytical approach to diagnosis and her empathetic manner with patients. Dr. Kelly dedicates her time to research on neurological disorders, aiming to develop more effective treatments.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Patrick Harris is a dedicated pediatrician who is experienced and have aspecial interest in childhood development and immunization. With a warm and friendly demeanor, he creates a comfortable environment for young patients and their families. In his free time, he enjoys volunteering at local schools.",
    fees: 50,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chloe Evans is a highly skilled General physician with over 4 years of experience. She is passionate about patient care and is known for his compassionate approach to treating patients. Outside of medicine, Dr. Evans enjoys reading and traveling.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle,Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ryan Martinez is an experienced gynecologist with an experience of 3 years.He is committed to providing comprehensive care to all, with a focus on reproductive health and wellness.When not practicing medicine, he loves hiking and spending time with her family.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Amelia Hill is a compassionate dermatologist who specializes in skin cancer prevention and treatment. She is passionate about educating patients on the importance of sun protection and skin health. Dr. Mitchell is also involved in clinical research to develop innovative skincare treatments. Outside of work, she loves painting and gardening.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc16",
    name: "Dr. Emily Davis",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Emily Davis is a highly respected gastroenterologist known for her compassionate approach and expert diagnosis in digestive health.she specializes in treating conditions like irritable bowel syndrome, Crohn’s disease, and liver disorders. She is also actively involved in educating the public on digestive health and wellness.",
    fees: 30,
    address: {
      line1: "67th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc17",
    name: "Dr. Michael Harris",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Michael Harris is a distinguished gastroenterologist with extensive experience in managing complex gastrointestinal conditions, including gastrointestinal cancers, GERD, and autoimmune diseases. Dr. Harris works closely with patients to develop tailored treatment plans. He is dedicated to improving the quality of life for those with chronic digestive issues and is involved in clinical research to advance treatments in the field.",
    fees: 30,
    address: {
      line1: "67th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc18",
    name: "Dr. Daniel Rodriguez",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Daniel Rodriguez is an experienced gastroenterologist who specializes in endoscopic procedures and the treatment of chronic gastrointestinal conditions.Dr. Rodriguez takes a proactive approach to managing diseases like celiac disease, ulcers, and liver cirrhosis. Outside of his clinical work, Dr. Rodriguez contributes to medical conferences and research in gastroenterology.",
    fees: 30,
    address: {
      line1: "67th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
