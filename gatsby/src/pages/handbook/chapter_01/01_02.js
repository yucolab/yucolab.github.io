import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import * as styles from "../../../components/index.module.css"

import Handbook_footer from "../../../components/handbook_footer"

/////////////////////////////////////////////////////////////////
const moreLinks = [

  {
    text: "home",
    url: "/",
  },
  {
    text: "handbook index",
    url: "/handbook",
  },

]// moreLinks
/////////////////////////////////////////////////////////////////
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

/////////////////////////////////////////////////////////////////
const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        chapter 1 : xxx
      </h1>
      <p className={styles.intro}>

        <h2>
          1.2. Employment Application / Information Update
        </h2>
        <p>

          We rely upon the accuracy of information contained in the employment application, the employment information update, and the accuracy of other data presented throughout the hiring process and employment. Any misrepresentations, falsifications, or material omissions in any of this information or data may result in exclusion of the individual from further consideration for employment or, if the person has been hired, termination of employment.
Employees are obligated to keep YUCOLAB updated on all personnel data such as :
postal address;
contact numbers ( home and mobile );
emergency contacts ( name, contact numbers );
On your on-boarding day, please fill-in the Employee Info Form ( Y214 ), then followed by the Employee Status Form ( Y216 ).
The Employee Info Form is supposed to be filled once only on the day when you join us.  When there is any update to your contact info ( and more important your emergency contacts ), please inform us via the Employee Status Form so as to keep your personnel data on file up-to-date, and your should also notify your report person for any updates as soon as possible.

        </p>
      </p>
    </div>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)
/////////////////////////////////////////////////////////////////
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

/////////////////////////////////////////////////////////////////
export default IndexPage


