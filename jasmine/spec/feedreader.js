/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // this test that each feed has a defined URL and is not empty. 
        
        it('URL is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
               expect(feed.url).not.toBe('');
            });
        });


        // this test that each feed has a defined Name  and is not empty. 
         it('Name is defined and not empty', function(){
           allFeeds.forEach(function(feed){
               expect(feed.name).toBeDefined();
               expect(feed.name).not.toBe('');
           });
        });
    });


    
    describe('The menu', function() {

        
        // this test ensure that the menure is set as hidden by defualt at first.
        
        it(' is hidden by default', function(){
        //retrun boolean value after checking if the HTML elemnt has this class
            var boolean =  $("body").hasClass("menu-hidden");
            expect(boolean).not.toBe(false);
            
        });   

       
        // this test ensures that the menue changes visibility when the icon is clicke on .
        it(' changes visibility when clicked', function(){
            var Icon = $('.menu-icon-link');
            Icon.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            Icon.click();
            expect($("body").hasClass("menu-hidden")).not.toBe(false);
        });
        
    });
    
    describe('Initial Entries', function() {
        
        
        // this test ensure the loadFeed function works properly when it is called.
        // at there must be at least on entry elemnt in feed container.
        beforeEach(function(done){
            loadFeed(0, done);
        });
            
        it(' feed has at least one enrty elemnet', function(done){
             var elem = $('.feed.entry').length;
             expect(elem).toBeGreaterThan(0);
             done();
         });

    });

    
     describe('New Feed Selection', function() {

         //this test makes sure that load feeed function will load a new feed, and by that the content will change.
         var before;
         var after;
         
         beforeEach(function(done){
            loadFeed(0, function() {
                before = $('.feed').html();
                done();
            });
         });
         
         it(' new feed is loaded and content changes', function(done){
                loadFeed(1, function() {
                  after = $('.feed').html();
                  expect(after).not.toEqual(before);
                  done();
                });
          });
         
     });
}());
