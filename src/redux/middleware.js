export const actionLogger = store => next => action => {
    console.log('Action Type :-',action.type)
    next(action)
}

export const payloadLogger = store => next => action => {
    console.log('Action Payload :-',action.payload)
    next(action)
}