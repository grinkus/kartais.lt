# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    collections:
        posts: ->
            @getCollection("html").findAllLive({isPost:true},[{filename:1}]).on "add", (model) ->
                model.setMetaDefaults({layout:"default"})
                model.setUrl('bybis')
    templateData:
        site:
            title: 'kartais.lt'
        getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title
}

# Export the DocPad Configuration
module.exports = docpadConfig
