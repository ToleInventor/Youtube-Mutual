const data = {
  channels: [
    { id: "1", name: "Channel 1" },
    { id: "2", name: "Channel 2" }
  ]
};

const qs = new URLSearchParams(window.location.search);
const action = qs.get('action');

self.postMessage({
  status: 200,
  body: action === 'getChannels' ? data.channels : []
});
