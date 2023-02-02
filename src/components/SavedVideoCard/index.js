// import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
  RemoveButton,
} from './StyledComponent'

const SavedVideoCard = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, removeVideo} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        viewCount,
        publishedAt,
        name,
        profileImageUrl,
      } = videoDetails
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const onClickRemove = () => {
        removeVideo(id)
      }

      return (
        <div className="row">
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
            </TrendingListItem>
          </ItemLink>
          <TrendingVideoDetails>
            <TrendingProfileImage src={profileImageUrl} alt="channel logo" />
            <TrendingContentSection>
              <TrendingTitle color={textColor}>{title}</TrendingTitle>
              <TrendingChannelName color={textColor}>
                {name}
              </TrendingChannelName>
              <TrendingViewsAndDate color={textColor}>
                {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                {publishedAt}
              </TrendingViewsAndDate>
              <RemoveButton type="button" onClick={onClickRemove}>
                Remove
              </RemoveButton>
            </TrendingContentSection>
          </TrendingVideoDetails>
        </div>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideoCard
