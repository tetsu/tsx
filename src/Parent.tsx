import {ChildAsFC} from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        OOh yeah
    </ChildAsFC>
};

export default Parent;

