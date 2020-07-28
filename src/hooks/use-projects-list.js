// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useProjectsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ProjectsListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount 
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useProjectsList;
