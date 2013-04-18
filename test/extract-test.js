var path = require('path')
var fs = require('fs')
var should = require('should');
var inspect = require('eyespect').inspector();
var cheerio = require('cheerio')
var getViewState = require('../index')
describe('Get View State', function () {
  it('should extract view state value', function () {
    var filePath = path.join(__dirname, 'data/yesViewState.html')
    var html = fs.readFileSync(filePath, 'utf8')
    var $ = cheerio.load(html)
    var viewState = getViewState($) // viewState has the value 'fooViewState'
    var desiredViewState = '/wEPDwUKMTY4MDgwNjg5MA9kFgJmD2QWAgIDD2QWBAIFDxYCHgVjbGFzcwUHbWFpbk5hdmQCCg9kFgICAQ9kFgJmD2QWBgIXDw9kFgIeB29ua2V5dXAFO25leHQoJ2N0bDAwX2NvbnRhY3RJZF9waG9uZScsJzMnLCdjdGwwMF9jb250YWN0SWRfcGhvbmUyJyk7ZAIbDw9kFgIfAQU8bmV4dCgnY3RsMDBfY29udGFjdElkX3Bob25lMicsJzMnLCdjdGwwMF9jb250YWN0SWRfcGhvbmUzJyk7ZAIfDw9kFgIfAQU5bmV4dCgnY3RsMDBfY29udGFjdElkX3Bob25lMycsJzQnLCdjdGwwMF9jb250YWN0SWRfZXh0Jyk7ZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WBQUaY3RsMDAkdWNTaWduSW4kY2hrUmVtZW1iZXIFE2N0bDAwJGJ0bmZvcmdvdFBhc3MFE2N0bDAwJGJ0blNpdGVTZWFyY2gFMWN0bDAwJE1haW5Db250ZW50UGxhY2VIb2xkZXIkdWNTaWduSW4kY2hrUmVtZW1iZXIFIGN0bDAwJGNvbnRhY3RJZCRidG5Db250YWN0U3VibWl0MqPQCUg9efPmnI65J1uOnd7tzyE='
    should.exist(viewState)
    viewState.should.eql(desiredViewState)
  })

  it('should get null if view state does not exist', function () {
    var filePath = path.join(__dirname, 'data/noViewState.html')
    var html = fs.readFileSync(filePath, 'utf8')
    var $ = cheerio.load(html)
    var viewState = getViewState($) // viewState has the value 'fooViewState'
    should.not.exist(viewState)
  })
})
