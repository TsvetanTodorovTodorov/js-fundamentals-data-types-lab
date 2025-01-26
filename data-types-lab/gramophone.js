function solve(band, album, song) {
  let songDuration = Math.ceil(
    (band.length * album.length * song.length) / 2 / 2.5
  );

  console.log(`The plate was rotated ${songDuration} times.`);
}
solve("Black Sabbath", "Paranoid", "War Pigs");
solve("Rammstein", "Sehnsucht", "Engel");
