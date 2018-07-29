import { graphql, StaticQuery } from "gatsby"
import * as React from "react"

export const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Title {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>{data.site.siteMetadata.siteName}</h1>

        {children}
      </div>
    )}
  />
)
