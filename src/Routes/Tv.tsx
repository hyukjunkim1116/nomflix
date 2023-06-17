import { useQuery } from "react-query";
import { getTv, getTopRatedTv, getPopularTv, IGetTvResult ,getLatestTv } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import  { useState } from "react"
import { useHistory, useRouteMatch } from "react-router-dom";


const Wrapper = styled.div`
    background-color:black;
`;

const Loader = styled.div`
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Banner = styled.div<{ bgPhoto: string}>`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:60px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${props => props.bgPhoto});
    background-size:cover;
`;

const Title = styled.h2`
    font-size: 68px;
    margin-bottom:20px;
`;

const Overview = styled.p`
    font-size: 20px;
    width:50%;
`;

const Slider = styled.div`
  &.slider_0 {
  position: relative;
  top: -100px;
}
  &.slider_1 {
    margin-top:150px;
  }
  &.slider_2 {
    margin-top:250px;
  }
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto:string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 150px;
  font-size: 66px;
  cursor: pointer;
   &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Payload = styled(motion.div)`
    opacity:0;
    padding: 5px;
    width:100%;
    background-color: ${props => props.theme.black.lighter};
    position:absolute;
    bottom:0;
    h4 {
        text-align:center;
        font-size:10px;
    }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const MovieCard = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
`;

const CardCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

const CardTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 40px;
  position: relative;
  top: -80px;
  font-weight:400;
`;

const CardOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

const CategoryTitle = styled.h2`
  padding:10px;
  margin-left:10px;
`

const rowVariants = {
    hidden: {
      x: window.outerWidth + 10,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 10,
    },
  };

const boxVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -10,
      transition: {
        delay: 0.5,
        duaration: 0.3,
        type: "tween",
      },
    },
  };

const payloadVariants = {
    hover : {
        opacity:1,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: "tween",
          },
    }
}

const offset = 6;

function Tv() {
    const {data : nowPlayingData, isLoading : nowPlayingLoading} = useQuery<IGetTvResult >(["movies", "nowPlaying"], getTv);
    const {data : topRatedData, isLoading : topRatedLoading } = useQuery<IGetTvResult >(["movies", "topRated"], getTopRatedTv);
    const {data : popularData, isLoading : popularLoading } = useQuery<IGetTvResult >(["movies", "popular"], getPopularTv);
    const {data : latestData, isLoading : latestTvLoading } = useQuery<IGetTvResult >(["movies", "latest"], getLatestTv);
    const data = [nowPlayingData, topRatedData, popularData,latestData]
    const [category, setCategory] = useState(0);
    const currentData = data[category]
    const isLoading = ( nowPlayingLoading && topRatedLoading && popularLoading && latestTvLoading)
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const history = useHistory();
    const tvMatch = useRouteMatch<{ tvId: string }>("/tv/:tvId");
    const { scrollY } = useViewportScroll();
    const clickedTv = tvMatch?.params.tvId && currentData?.results.find((tv) => tv.id === +tvMatch.params.tvId);
    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onClicked = (tvId: number, category:number) => {
        history.push(`/tv/${tvId}`);
        setCategory(category)
      };
    const onClickedOverlay = () => history.push("/tv");
    const nextIndex = () => {
        if (currentData) {
            if (leaving) return;    
            toggleLeaving();
            const totalTv = currentData?.results.length - 1;
            const maxIndex = Math.floor(totalTv / offset);
            console.log(index, maxIndex);
            setIndex((prev) =>(prev === maxIndex ? 0 : prev + 1));
        }
    } 
    return (
        <Wrapper>
            {isLoading ? <Loader>Loading</Loader> : 
            <>
                <Banner onClick={nextIndex} bgPhoto={makeImagePath(nowPlayingData?.results[0].backdrop_path || "")}>
                    <Title>{nowPlayingData?.results[0].name}</Title>
                    <Overview>{nowPlayingData?.results[0].overview}</Overview>
                </Banner>
                {[0, 1, 2].map( i => ( 
               <>
                <Slider className={`slider_${i}`}>
                  <CategoryTitle>
                    {i === 0 ? "Now Playing" : i === 1 ? "Top Rated" : "popular" }
                  </CategoryTitle>
                <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
                    <Row variants={rowVariants} initial="hidden" animate="visible" exit="exit" transition={{ type: "tween", duration: 1 }} key={index}>
                    {data[i]?.results.slice(1).slice(offset * index, offset * index + offset).map((movie) => (
                        <Box key={movie.id} bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                        whileHover="hover"
                        initial="normal"
                        layoutId={`${i}_${movie.id}`}
                        variants={boxVariants}
                        onClick={() => onClicked(movie.id, i)}
                        >
                            <Payload variants={payloadVariants}>
                                <h4>{movie.name}</h4>
                            </Payload>
                        </Box>
                        ))}
                    </Row>
                    </AnimatePresence>
                </Slider>
                </>))}
                <AnimatePresence>
                    {tvMatch ? (
                    <>
                     <Overlay onClick={onClickedOverlay} animate={{opacity: 1}} exit={{opacity: 0}}>
                     </Overlay>
                    <MovieCard
                        style={{ top: scrollY.get() + 100 }}
                        layoutId={tvMatch.params.tvId}>
                        {clickedTv && (
                        <>
                        <CardCover
                            style={{backgroundImage: `linear-gradient(to top, black, transparent), 
                            url(${makeImagePath(clickedTv.backdrop_path,"w500")})`}}>
                        </CardCover>
                        <CardTitle>{clickedTv.name}</CardTitle>
                        <CardOverview>{clickedTv.overview === "" ? "This Tv show does not have an overview" : clickedTv.overview }</CardOverview>
                        </>
                        )}
                    </MovieCard> 
                    </>
                    ) : null}
                </AnimatePresence>
            </>
            }
        </Wrapper>
 
    );
}

export default Tv;
