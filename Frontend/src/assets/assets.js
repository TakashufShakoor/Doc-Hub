import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import header_img2 from './header_img2.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import profile_pic2 from './profile_pic2.jpg'
import contact_image from './contact_image.png'
import contact_image2 from './contact_image2.jpg'
import about_image from './about_image.png'
import about_image2 from './about_image2.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logo from './logo.png'
import ai_icon from './ai_icon.png'
import location_logo from './location_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import paid from './paid.png'
import address from './address.png'



export const assets = {
    appointment_img,
    header_img,
    header_img2,
    group_profiles,
    logo,
    location_logo,
    ai_icon,
    paid,
    chats_icon,
    verified_icon,
    info_icon,
    address,
    profile_pic,
    profile_pic2,
    arrow_icon,
    contact_image,
    contact_image2,
    about_image,
    about_image2,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const currency_symbol=['Rs ']

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Shamshad Rasool',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shamshad Rasool has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Shamshad Rasool has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Fateh Town, Okara',
            line2: 'Qadirabad, Sahiwal'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Areej Nazir',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Areej Nazir has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1200,
        address: {
            line1: 'Defense Road, Lahore',
            line2: 'Litton Road, Lahore'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sana Hameed',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sana Hameed has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 800,
        address: {
            line1: 'Wapda Town, Lahore',
            line2: 'Muslim Town, Lahore'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Azra Yasmin',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Azra Yasmin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Valencia Town, Lahore ',
            line2: 'Edenabad, Lahore'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Taha Nadeem',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Taha Nadeem has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Clock Tower, Faisalabad',
            line2: 'Eden Valley, Faisalabad'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Rajab Butt',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajab Butt has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Bahria Town, Lahore',
            line2: 'Park View City, Lahore'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rabia Suleman',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rabia Suleman has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'G10, Islamabad',
            line2: 'I10, Islamabad'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ayesha Iqbal',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ayesha Iqbal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
            line1: 'Saddar, Rawalpindi',
            line2: 'D12, Islamabad'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Abdul Mateen',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Abdul Mateen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: 'Shadman Colony, Lahore',
            line2: 'Shahjamal Colony, Lahore'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Nadia Zahir',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Nadia Zahir has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Pakpatan, Sahiwal',
            line2: 'Fareed Town, Sahiwal'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Muhammad Danish',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Muhammad Danish has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Etihad Town, Lahore',
            line2: 'Shabbir Town, Lahore'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Harris Rasool',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Harris Rasool has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Fateh Town, Okara',
            line2: 'Faisal Colony, Okara'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Muhammad Amir',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Muhammad Amir has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Jinnah Hospital, Lahore',
            line2: 'Services Hospital, Lahore'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Maryam Ahmed',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Maryam Ahmed has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
            line1: 'Muslim Town, Lahore',
            line2: 'Allama Iqbal Town, Lahore'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ahmed Goraya',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ahmed Goraya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Shalimar Hospital, Lahore',
            line2: 'PCSIR, Canal Road, Lahore'
        }
    },

    
        {
            _id: 'doc16',
            name: 'Dr. Ayesha Khan',
            image: doc1,
            speciality: 'General Physician',
            degree: 'MBBS',
            experience: '6 Years',
            about: 'Dr. Ayesha Khan is dedicated to providing comprehensive medical care with a focus on preventive healthcare and chronic disease management.',
            fees: 1500,
            address: {
                line1: 'Gulberg, Lahore',
                line2: 'DHA, Lahore'
            }
        },
        {
            _id: 'doc17',
            name: 'Dr. Bilal Ahmed',
            image: doc2,
            speciality: 'Gynecologist',
            degree: 'MBBS, FCPS (Gynecology)',
            experience: '8 Years',
            about: 'Dr. Bilal Ahmed is a skilled gynecologist specializing in maternity care, infertility treatments, and women’s health.',
            fees: 1800,
            address: {
                line1: 'Johar Town, Lahore',
                line2: 'Model Town, Lahore'
            }
        },
        {
            _id: 'doc18',
            name: 'Dr. Hina Malik',
            image: doc3,
            speciality: 'Dermatologist',
            degree: 'MBBS, FCPS (Dermatology)',
            experience: '7 Years',
            about: 'Dr. Hina Malik specializes in skin diseases, cosmetic dermatology, and hair loss treatments.',
            fees: 2000,
            address: {
                line1: 'Shadman, Lahore',
                line2: 'Iqbal Town, Lahore'
            }
        },
        {
            _id: 'doc19',
            name: 'Dr. Saif Ullah',
            image: doc4,
            speciality: 'Pediatricians',
            degree: 'MBBS, DCH (Pediatrics)',
            experience: '5 Years',
            about: 'Dr. Saif Ullah provides expert pediatric care, including vaccinations, nutrition counseling, and child development support.',
            fees: 1500,
            address: {
                line1: 'Clifton, Karachi',
                line2: 'DHA Phase 5, Karachi'
            }
        },
        {
            _id: 'doc20',
            name: 'Dr. Anum Fatima',
            image: doc5,
            speciality: 'Neurologist',
            degree: 'MBBS, FCPS (Neurology)',
            experience: '9 Years',
            about: 'Dr. Anum Fatima specializes in treating epilepsy, stroke, migraines, and neurological disorders.',
            fees: 2500,
            address: {
                line1: 'Bahria Town, Lahore',
                line2: 'Township, Lahore'
            }
        },
        {
            _id: 'doc21',
            name: 'Dr. Rizwan Haider',
            image: doc6,
            speciality: 'Gastroenterologist',
            degree: 'MBBS, FCPS (Gastroenterology)',
            experience: '10 Years',
            about: 'Dr. Rizwan Haider is an expert in digestive health, treating conditions such as acid reflux, IBS, and liver diseases.',
            fees: 2200,
            address: {
                line1: 'G-10, Islamabad',
                line2: 'F-8, Islamabad'
            }
        },
        {
            _id: 'doc22',
            name: 'Dr. Nadia Javed',
            image: doc7,
            speciality: 'General Physician',
            degree: 'MBBS',
            experience: '6 Years',
            about: 'Dr. Nadia Javed provides general healthcare services, preventive care, and chronic disease management.',
            fees: 1500,
            address: {
                line1: 'Garden Town, Lahore',
                line2: 'Johar Town, Lahore'
            }
        },
        {
            _id: 'doc23',
            name: 'Dr. Faisal Khan',
            image: doc8,
            speciality: 'Gynecologist',
            degree: 'MBBS, FCPS (Gynecology)',
            experience: '8 Years',
            about: 'Dr. Faisal Khan is an expert in gynecological surgeries, infertility treatments, and prenatal care.',
            fees: 1800,
            address: {
                line1: 'Blue Area, Islamabad',
                line2: 'F-11, Islamabad'
            }
        },
        {
            _id: 'doc24',
            name: 'Dr. Sara Hussain',
            image: doc9,
            speciality: 'Dermatologist',
            degree: 'MBBS, FCPS (Dermatology)',
            experience: '7 Years',
            about: 'Dr. Sara Hussain provides dermatological care, including acne treatments, laser procedures, and skin rejuvenation.',
            fees: 2000,
            address: {
                line1: 'DHA, Karachi',
                line2: 'Saddar, Karachi'
            }
        },
        {
            _id: 'doc25',
            name: 'Dr. Hamid Raza',
            image: doc10,
            speciality: 'Pediatricians',
            degree: 'MBBS, DCH (Pediatrics)',
            experience: '5 Years',
            about: 'Dr. Hamid Raza offers specialized child healthcare, managing allergies, growth concerns, and infections.',
            fees: 1500,
            address: {
                line1: 'PECHS, Karachi',
                line2: 'Nazimabad, Karachi'
            }
        },
        {
            _id: 'doc26',
            name: 'Dr. Asma Tariq',
            image: doc11,
            speciality: 'Neurologist',
            degree: 'MBBS, FCPS (Neurology)',
            experience: '9 Years',
            about: 'Dr. Asma Tariq treats neurological conditions such as multiple sclerosis, Parkinson’s disease, and neuropathy.',
            fees: 2500,
            address: {
                line1: 'G-9, Islamabad',
                line2: 'G-13, Islamabad'
            }
        },
        {
            _id: 'doc27',
            name: 'Dr. Hassan Jameel',
            image: doc12,
            speciality: 'Gastroenterologist',
            degree: 'MBBS, FCPS (Gastroenterology)',
            experience: '10 Years',
            about: 'Dr. Hassan Jameel specializes in treating liver diseases, digestive disorders, and endoscopic procedures.',
            fees: 2200,
            address: {
                line1: 'Clifton, Karachi',
                line2: 'Defence, Karachi'
            }
        },
        {
            _id: 'doc28',
            name: 'Dr. Mehwish Naeem',
            image: doc13,
            speciality: 'General Physician',
            degree: 'MBBS',
            experience: '6 Years',
            about: 'Dr. Mehwish Naeem provides expert medical consultations, routine check-ups, and chronic disease treatment.',
            fees: 1500,
            address: {
                line1: 'Shah Faisal Town, Karachi',
                line2: 'Gulshan-e-Iqbal, Karachi'
            }
        },
        {
            _id: 'doc29',
            name: 'Dr. Khalid Mehmood',
            image: doc14,
            speciality: 'Gynecologist',
            degree: 'MBBS, FCPS (Gynecology)',
            experience: '8 Years',
            about: 'Dr. Khalid Mehmood is a trusted gynecologist handling high-risk pregnancies and reproductive health concerns.',
            fees: 1800,
            address: {
                line1: 'Satellite Town, Rawalpindi',
                line2: 'F-6, Islamabad'
            }
        },
        {
            _id: 'doc30',
            name: 'Dr. Zoya Hassan',
            image: doc15,
            speciality: 'Dermatologist',
            degree: 'MBBS, FCPS (Dermatology)',
            experience: '7 Years',
            about: 'Dr. Zoya Hassan specializes in advanced skincare treatments, skin cancer diagnosis, and cosmetic dermatology.',
            fees: 2000,
            address: {
                line1: 'Jail Road, Lahore',
                line2: 'Johar Town, Lahore'
            }
        }
    
    



]