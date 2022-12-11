/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  async rewrites() {
    const rewritesArray = [
      {
        source: "/uploads/:asset*",
        destination:
          "http://localhost:40286/uploads/:asset*",
      },
    ];
    return rewritesArray;
  },
};
