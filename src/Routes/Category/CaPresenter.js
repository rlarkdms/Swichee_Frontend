import PropTypes from "prop-types";
import styled from "styled-components";
import HomePosting from "Components/HomePosting";
import Sidebar from "Components/Sidebar";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  color: #ff9900;
  margin-top: 40px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100%;
`;

const CaPresenter = ({ categories, theme, loading, error, updateContainer }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <div>
        <MainTitle>{theme}</MainTitle>
        <MainContent>
          {error ? (
            error && <Message color="#D3D3D3" text={error} />
          ) : (
            <>
              <PostContainer>
                {categories?.length > 0 &&
                  categories.map((ca, index) => (
                    <HomePosting
                      key={`post-${index}`}
                      id={ca.Contents_id}
                      category={ca.Category}
                      imageUrl={ca.Thumbnail}
                      avatar={ca.image}
                      contentsType={ca.type_id}
                      title={ca.Title}
                      writer={ca.User_name}
                      blue={ca.blue}
                      likes={ca.Likes}
                      views={ca.Views}
                      comments={ca.comment_count}
                      date={ca.Date}
                    />
                  ))}
                {/* {infinite?.length > 0 &&
                  infinite.map((infi, index) => (
                    <HomePosting
                      key={`post-${index}`}
                      id={infi.Contents_id}
                      category={infi.Category}
                      imageUrl={infi.Thumbnail}
                      avatar={infi.image}
                      contentsType={infi.type_id}
                      title={infi.Title}
                      writer={infi.User_name}
                      blue={infi.blue}
                      likes={infi.Likes}
                      views={infi.Views}
                      comments={infi.comment_count}
                      date={infi.Date}
                    />
                  ))} */}
              </PostContainer>
              <Sidebar updateContainer={updateContainer} />
            </>
          )}
        </MainContent>
      </div>
    </Container>
  );

CaPresenter.propTypes = {
  categories: PropTypes.array.isRequired,
  theme: PropTypes.string,
  // infinite: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CaPresenter;
