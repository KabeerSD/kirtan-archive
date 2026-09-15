/**
 * Shared recording player for Kirtan Archive pages.
 * Looks for each [data-recording-player] section and wires up
 * one audio element to a list of .recording-link anchors.
 */

document.querySelectorAll("[data-recording-player]").forEach((player) => {
  const audio = player.querySelector("[data-audio-player]");
  const currentTitle = player.querySelector("[data-current-title]");
  const links = player.querySelectorAll(".recording-link");
  const rewindButton = player.querySelector("[data-skip-rewind]");
  const forwardButton = player.querySelector("[data-skip-forward]");

  if (!audio || !currentTitle || links.length === 0) {
    return;
  }

  const SKIP_SECONDS = 10;

  /**
   * Seek the shared audio element by a number of seconds.
   * Rewind is clamped at 0; forward is clamped at duration when known.
   */
  function skip(deltaSeconds) {
    const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    let next = current + deltaSeconds;

    if (next < 0) {
      next = 0;
    }

    if (Number.isFinite(audio.duration) && next > audio.duration) {
      next = audio.duration;
    }

    audio.currentTime = next;
  }

  if (rewindButton) {
    rewindButton.addEventListener("click", () => skip(-SKIP_SECONDS));
  }

  if (forwardButton) {
    forwardButton.addEventListener("click", () => skip(SKIP_SECONDS));
  }

  /**
   * Load a recording into the shared player.
   * shouldPlay: true after a user click; false on initial page load.
   */
  function selectRecording(link, shouldPlay) {
    audio.src = link.href;
    currentTitle.textContent = link.textContent.trim();

    links.forEach((item) => {
      item.classList.remove("is-selected");
      item.removeAttribute("aria-current");
    });

    link.classList.add("is-selected");
    link.setAttribute("aria-current", "true");

    if (shouldPlay) {
      // Browsers may block play(); catch so it does not show as an error.
      audio.play().catch(function () {});
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      selectRecording(link, true);
    });
  });

  // Select the first recording on load, but do not autoplay.
  selectRecording(links[0], false);
});
