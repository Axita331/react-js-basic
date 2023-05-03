import { connect } from "react-redux"
import Comments from "../../pages/comments/Comments"
import { getComments } from "../../store/service/comments/comments.service"

const mapStateToProps = (rootState) => {
    console.log(rootState.commentsReducer);
    return {
        ...rootState.commentsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCommentsAPI: () => dispatch(() => getComments(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);