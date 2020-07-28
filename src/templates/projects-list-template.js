// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import { useSiteMetadata, useProjectsList } from "../hooks";
import type { PageContext, AllMarkdownRemark } from "../types";

const IndexTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  // const {
  //   currentPage,
  //   hasNextPage,
  //   hasPrevPage,
  //   prevPagePath,
  //   nextPagePath,
  // } = pageContext;

  // const edges = data.allMarkdownRemark;

  // const pageTitle =
  //   currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout title="Projects" description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        {/* <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        /> */}
      </Page>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
