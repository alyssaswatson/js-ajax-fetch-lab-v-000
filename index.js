const fork = 'https://github.com/alyssaswatson/js-ajax-fetch-lab-v-000'

function getIssues() {
  fetch(`${fork}/issues`, {
  })
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    });
}

function showIssues(json) {
  $("#issues").append(`<h4>Issues</h4><a href ="${json.html_url}">${json.title}</a>`)
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
