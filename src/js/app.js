class Team {
  constructor() {
    this.members = [];
    this.currentIndex = 0;
  }

  add(character) {
    this.members.push(character);
  }

  [Symbol.iterator]() {
    const { members } = this;
    let currentIndex = 0;

    return {
      next() {
        if (currentIndex >= members.length) {
          return {
            done: true,
          };
        }

        const character = members[currentIndex];
        currentIndex++;
        return {
          value: character,
          done: false,
        };
      },
    };
  }
}
