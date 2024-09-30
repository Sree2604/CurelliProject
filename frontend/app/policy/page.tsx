"use client";
import React from "react";
import { useRouter } from "next/navigation";

import ToTop from "@/components/ToTop";
import "./terms.css";

const PrivacyPolicy = () => {
  const router = useRouter();

  const handleNavigation = (direction: number) => {
    if (direction === -1) {
      router.back();
    } else if (direction === 1) {
      router.push("/next-page");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mx-auto  p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-12 max-w-[900px] justify-start ">
        <h1 className="text-xl font-bold mb-4">
          Curellifoods.com Privacy Policy
        </h1>
        <span className="text-gray-600">Last updated: February 10, 2024</span>
        <p className="mt-4 leading-relaxed">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="mt-4 leading-relaxed">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>
        <h2 className="text-xl font-bold mt-8">
          Interpretation and Definitions
        </h2>
        <h3 className="text-xl font-bold mt-4">Interpretation</h3>
        <p className="mt-4  leading-relaxed">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3 className="text-xl font-bold mt-4">Definitions</h3>
        <p className="mt-4 leading-relaxed">
          For the purposes of this Privacy Policy:
        </p>
        <div className="mt-4 rounded-md">
          <p className="mb-4">
            <b>Account</b> means a unique account created for You to access our
            Service or parts of our Service.
          </p>
          <p className="mb-4">
            <b>Affiliate</b> means an entity that controls, is controlled by or
            is under common control with a party, where &quot;control&quot;
            means ownership of 50% or more of the shares, equity interest or
            other securities entitled to vote for election of directors or other
            managing authority.
          </p>
          <p className="mb-4">
            <b>Company</b> (referred to as either &quot;the Company&quot;,
            &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
            refers to Curelli Foods Private Limited, No.705/3B of
            Chenbagaramanputhoor Road, Sahayanagar, Thovalai Village,
            Shanmugapuram, Kanyakumari district, Tamil Nadu - 629302.
          </p>
          <p className="mb-4">
            <b>Cookies</b> are small files that are placed on Your computer,
            mobile device or any other device by a website, containing the
            details of Your browsing history on that website among its many
            uses.
          </p>
          <p className="mb-4">
            <b>Country</b> refers to: Tamil Nadu, India
          </p>
          <p className="mb-4">
            <b>Device</b> means any device that can access the Service such as a
            computer, a
          </p>
          <p className="mb-4">
            <b>Personal Data</b> is any information that relates to an
            identified or identifiable
          </p>
          <p className="mb-4">
            <b>Service</b> refers to the Website.
          </p>
          <p className="mb-4">
            <b>Service Provider</b> means any natural or legal person who
            processes the data on behalf of the Company. It refers to
            third-party companies or individuals employed by the Company to
            facilitate the Service, to provide the Service on behalf of the
            Company, to perform services related to the Service or to assist the
            Company in analyzing how the Service is used.
          </p>
          <p className="mb-4">
            <b>Third-party Social Media Service</b> refers to any website or any
            social network website through which a User can log in or create an
            account to use the Service.
          </p>
          <p className="mb-4">
            <b>Usage Data</b> refers to data collected automatically, either
            generated by the use of the Service or from the Service
            infrastructure itself (for example, the duration of a page visit).
          </p>
          <p className="mb-4">
            <b>Website</b> refers to My site, accessible from
            http://curellifoods.com/
          </p>
          <p>
            <b>You</b> means the individual accessing or using the Service, or
            the company, or other legal entity on behalf of which such
            individual is accessing or using the Service, as applicable.
          </p>
        </div>

        <h2 className="text-xl font-bold my-6">
          Collecting and Using Your Personal Data
        </h2>
        <span>Types of Data Collected </span>
        <h3 className="text-xl font-bold mt-4">Personal Data </h3>
        <p>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <div>
          <span>
            Email address First name and last name Phone number Address, State,
            Province, ZIP/Postal code, City Usage Data
          </span>
        </div>
        <h3 className="text-xl font-bold mt-4">Usage Data</h3>
        <p>Usage Data is collected automatically when using the Service. </p>
        <p>
          Usage Data may include information such as Your Device&apos;s Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </p>
        <p>
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </p>
        <p>
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </p>
        <h3 className="text-xl font-semibold mt-4 ">
          Information from Third-Party Social Media Services
        </h3>
        <div>
          <p>
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
          </p>
          <ul className="list-disc ml-8">
            <li>Google</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          <p>
            If You decide to register through or otherwise grant us access to a
            Third-Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media
            Service&apos;s account, such as Your name, Your email address, Your
            activities or Your contact list associated with that account.
          </p>
          <p>
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service&apos;s
            account. If You choose to provide such information and Personal
            Data, during registration or otherwise, You are giving the Company
            permission to use, share, and store it in a manner consistent with
            this Privacy Policy.
          </p>
        </div>
        <div className="mt-8 rounded-md">
          <h3 className="text-xl font-bold mt-2 italic">
            Tracking Technologies and Cookies
          </h3>
          <div>
            <p>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </p>
            <ul className="list-disc ml-8">
              <li>
                <b>Cookies or Browser Cookies.</b> A cookie is a small file
                placed on Your Device. You can instruct Your browser to refuse
                all Cookies or to indicate when a Cookie is being sent. However,
                if You do not accept Cookies, You may not be able to use some
                parts of our Service. Unless you have adjusted Your browser
                setting so that it will refuse Cookies, our Service may use
                Cookies.
              </li>
              <li>
                <b>Web Beacons.</b> Certain sections of our Service and our
                emails may contain small electronic files known as web beacons
                (also referred to as clear gifs, pixel tags, and single-pixel
                gifs) that permit the Company, for example, to count users who
                have visited those pages or opened an email and for other
                related website statistics (for example, recording the
                popularity of a certain section and verifying system and server
                integrity).
              </li>
            </ul>
            <p>
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
              Cookies. Persistent Cookies remain on Your personal computer or
              mobile device when You go offline, while Session Cookies are
              deleted as soon as You close Your web browser. You can learn more
              about cookies on TermsFeed website article.
            </p>
            <p>
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>
            <div>
              <h4 className="text-lg font-bold mt-4">
                Necessary / Essential Cookies
              </h4>
              <p>Type: Session Cookies</p>
              <p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
              <h4 className="text-lg font-bold mt-4">
                Cookies Policy / Notice Acceptance Cookies
              </h4>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </p>
              <h4 className="text-lg font-bold mt-4">Functionality Cookies</h4>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </div>

            <p>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-4">Use of Your Personal Data</h3>
        <div>
          <p>The Company may use Personal Data for the following purposes:</p>
          <div>
            <p>
              <b>To provide and maintain our Service:</b> including to monitor
              the usage of our Service.
            </p>
            <p>
              <b>To manage Your registration as a user of the Service:</b> The
              Personal Data You provide can give You access to different
              functionalities of the Service that are available to You as a
              registered user.
            </p>
            <p>
              <b>For the performance of a contract:</b> the development,
              compliance and undertaking of the purchase contract for the
              products, items or services You have purchased or of any other
              contract with Us through the Service.
            </p>
            <p>
              <b>To contact You:</b> To contact You by email, telephone calls,
              SMS, or other equivalent forms of electronic communication, such
              as a mobile application&apos;s push notifications regarding
              updates or informative communications related to the
              functionalities, products or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </p>
            <p>
              <b>
                To provide You with news, special offers and general information
                about other goods, services and events:
              </b>
              which we offer that are similar to those that you have already
              purchased or enquired about unless You have opted not to receive
              such information.
            </p>
            <p>
              <b>To manage Your requests:</b> To attend and manage Your requests
              to Us.
            </p>
            <p>
              <b>For business transfers:</b> We may use Your information to
              evaluate or conduct a merger, divestiture, restructuring,
              reorganization, dissolution, or other sale or transfer of some or
              all of Our assets, whether as a going concern or as part of
              bankruptcy, liquidation, or similar proceeding, in which Personal
              Data held by Us about our Service users is among the assets
              transferred.
            </p>
            <p>
              <b>For other purposes:</b> We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </p>
          </div>
          <p>
            We may share Your personal information in the following situations:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <b>With Service Providers:</b> We may share Your personal
              information with Service Providers to monitor and analyze the use
              of our Service, to contact You.
            </li>
            <li>
              <b>For business transfers:</b> We may share or transfer Your
              personal information in connection with, or during negotiations
              of, any merger, sale of Company assets.
            </li>
            <li>
              <b>With Affiliates:</b> We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </li>
            <li>
              <b>With business partners:</b> We may share Your information with
              Our business partners to offer You certain products, services or
              promotions.
            </li>
            <li>
              <b>With other users:</b> when You share personal information or
              otherwise interact in the public areas with other users, such
              information may be viewed by all users and may be publicly
              distributed outside. If You interact with other users or register
              through a Third Party Social Media Service, Your contacts on the
              Third-Party Social Media Service may see Your name, profile,
              pictures and description of Your activity. Similarly, other users
              will be able to view descriptions of Your activity, communicate
              with You and view Your profile.
            </li>
            <li>
              <b>With Your consent:</b> We may disclose Your personal
              information for any other purpose with Your consent.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mt-4">
          Retention of Your Personal Data
        </h3>
        <p>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </p>
        <p>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </p>
        <h3 className="text-xl font-bold mt-4">
          Transfer of Your Personal Data
        </h3>
        <p>
          Your information, including Personal Data, is processed at the
          Company&apos;s operating offices and in any other places where the
          parties involved in the processing are located. It means that this
          information may be transferred to — and maintained on — computers
          located outside of Your state, province, country or other governmental
          jurisdiction where the data protection laws may differ than those from
          Your jurisdiction.
        </p>
        <p>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </p>
        <p>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </p>
        <h3 className="text-xl font-bold mt-4">Delete Your Personal Data </h3>
        <p>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </p>
        <p>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </p>
        <p>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </p>
        <p>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </p>
        <h3 className="text-xl font-bold mt-4">
          Disclosure of Your Personal Data
        </h3>
        <div>
          <h4 className="italic font-bold">Business Transactions</h4>
          <p>
            If the Company is involved in a merger, acquisition, or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h4 className="italic font-bold">Law enforcement</h4>
          <p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g., a court or a government
            agency).
          </p>
          <h4 className="italic font-bold">Other legal requirements</h4>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc ml-8">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
        </div>
        <h4>Security of Your Personal Data </h4>
        <h3 className="text-xl font-bold mt-4">Children&apos;s Privacy </h3>
        <p>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent&apos;s consent before We collect and use that
          information.
        </p>
        <h3 className="text-xl font-bold mt-4">Links to Other Websites </h3>
        <p>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party&apos;s site. We strongly advise You to review the
          Privacy Policy of every site You visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <h3 className="text-xl font-bold mt-4">
          Changes to this Privacy Policy
        </h3>
        <p>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <h3 className="text-xl font-bold mt-4">Contact Us </h3>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <div className="ml-8">
          <p>
            By email:{" "}
            <a href="mailto:contact@curellifoods.com">
              contact@curellifoods.com
            </a>
          </p>
          <p>
            By visiting this page on our website:{" "}
            <a href="http://curellifoods.com/contact">
              http://curellifoods.com/contact
            </a>
          </p>
          <p>
            By phone number: <a href="tel:+918668157699">+91 8668157699</a>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">
        <button
          className="border-2 border-gray-300 hover:bg-blue-600 hover:text-white rounded p-2 w-24 font-bold transition-colors duration-300"
          onClick={() => handleNavigation(-1)}
        >
          Back
        </button>
      </div>
      <ToTop />
    </>
  );
};

export default PrivacyPolicy;
