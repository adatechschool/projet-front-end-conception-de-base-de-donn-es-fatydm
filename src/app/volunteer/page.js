import Head from "next/head"
import BannerVolunteer from "@/components/BannerVolunteer"
import BecomeVolunteer from "@/components/BecomeVolunteer"
import QuestionVolunteer from "@/components/QuestionsVolunteerEnd"
import Testimonials from "@/components/Testimonials"
import FormVolunteer from "@/components/FormVolunteer"

import { Amatic_SC } from 'next/font/google'
const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400'],
})

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Volunteer() {
  return (
    <>
      <Head>
        <title>Devenez bénévole</title>
      </Head>



      <BannerVolunteer />
      <FormVolunteer class="formVolunteer" />

      <BecomeVolunteer />
      <Testimonials />
      <QuestionVolunteer />
    </>
  )
}