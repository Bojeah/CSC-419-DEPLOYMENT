import type { Id } from "../convex/_generated/dataModel";
import { AddBookmarkButton } from "./components/AddBookmark";
import { BookmarkList } from "./components/BookmarkList";
import { TrackHeader } from "./components/TrackHeader";

function App() {
  function onSeek(second: number) {
    console.log(second);
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {/* <TrackInfo title="The Science of Deduction" author="Arthur Conan Doyle" narrator="Stephen Nwachukwu" /> */}

      <TrackHeader bookId={"jd75vsp444wzv526f6js4gx9ex8j37pe" as Id<"books">} />
      <AddBookmarkButton
        bookId={"jd75vsp444wzv526f6js4gx9ex8j37pe" as Id<"books">}
        chapter={2}
        time={40}
      />
      <BookmarkList
        bookId={"jd75vsp444wzv526f6js4gx9ex8j37pe" as Id<"books">}
        chapter={2}
        onSeek={onSeek}
      />
      {/* <PlayPauseButton /> */}

      {/* <BookmarkNote note="Nice book" /> */}
    </div>
  );
}

export default App;

