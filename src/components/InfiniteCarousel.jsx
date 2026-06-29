import CarouselCard from "./CarouselCard";

const CARD_W = 200;
const CARD_H = 320;
const CARD_SCALE = 1.35;
const CARD_GAP = 1.35;

const TRACK_DURATION = 25;
const TRACK_H = CARD_H * CARD_SCALE;

const InfiniteCarousel = ({ projects }) => {
  const doubled = [...projects, ...projects];

  return (
    <div className="overflow-hidden">
      <div className="track flex items-center">
        {doubled.map((projects, i) => {
          <CarouselCard key={i} project={projects} />;
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
