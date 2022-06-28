let nums1 = [1, 3]
let nums2 = [2, 4]

function findMedianSortedArrays(nums1, nums2) {
    let nums3 = nums1.concat(nums2)
    nums3.sort((a, b) => a - b);
    if (nums3.length % 2 != 0) {
        let center = Math.floor(nums3.length / 2);
        return nums3[center]
    } else if (nums3.length % 2 == 0) {
        let center = nums3.length / 2;
        return (nums3[center] + nums3[center - 1]) / 2
    }
}

findMedianSortedArrays(nums1, nums2);