import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
const TagsPage = ({data, pageContext}) => {
  const group = data.allMdx.group
  const {limit, skip} = pageContext
  const tagsNum = group.slice(skip).length  
  const tags = tagsNum < limit ? group.slice(skip, tagsNum + skip) : group.slice(skip, limit)
  console.log(pageContext)
  return (
    <div>
   
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query tagsListQuery($skip: Int!, $limit: Int!){
    allMdx(
        limit: 2000
    ) {
      group(
          field: frontmatter___tags
          limit: $limit
          skip: $skip
          ) {
        fieldValue
        totalCount
      }
    }
  }
`