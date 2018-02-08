# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    collections:
        pages: ->
            @getCollection("html").findAllLive({isPage:true},[{filename:1}])
}

# Export the DocPad Configuration
module.exports = docpadConfig
