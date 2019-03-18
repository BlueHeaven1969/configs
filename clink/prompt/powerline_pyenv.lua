-- Constants
local exports = require('path')
local segmentColors = {
    fill = colorCyanBr,
    text = colorBlackBr
}

function get_virtual_env(env_var)
    env_path = clink.get_env(env_var)
    if env_path then
        basen = exports.basename(env_path)
        return { hasEnv = true, envName = basen }
    end
    return { hasEnv = false, envName = "" }
end

-- * Segment object with these properties:
---- * isNeeded: sepcifies whether a segment should be added or not. For example: no Git segment is needed in a non-git folder
---- * text
---- * textColor: Use one of the color constants. Ex: colorWhite
---- * fillColor: Use one of the color constants. Ex: colorBlue
local segment = {
    isNeeded = false,
    text = "",
    textColor = 0,
    fillColor = 0
}

---
-- Sets the properties of the Segment object, and prepares for a segment to be added
---
local function init()
    -- add in virtual env name
    local venv = get_virtual_env('VIRTUAL_ENV')
	segment.isNeeded = venv.hasEnv
	if venv.hasEnv then
		segment.text = " "..plc_prompt_pythonSymbol.." "..venv.envName.." "
		segment.fillColor = segmentColors.fill
		segment.textColor = segmentColors.text
	end
end
---
-- Uses the segment properties to add a new segment to the prompt
---
local function addAddonSegment()
    init()
    if segment.isNeeded then 
        addSegment(segment.text, segment.textColor, segment.fillColor)
    end 
end 

-- Register this addon with Clink
clink.prompt.register_filter(addAddonSegment, 62)