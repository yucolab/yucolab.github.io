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
          1.1. Changes in Policy
        </h2>
        <p>
          This Handbook supersedes all previous employee Handbooks and memos that may have been issued from time to time on subjects covered in this Handbook.
Since our business and our organization are subject to change, we reserve the right to interpret, change, suspend, amend, cancel, any policy, procedures, or benefits at any time. We will notify all employees of these changes via proper means of notification. Changes will be effective on the dates determined by YUCOLAB, and after those dates all superseded policies will be null.
No individual supervisor or manager has the authority to change policies at any time. If you are uncertain about any policy or procedure, please speak with your report person. 
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


