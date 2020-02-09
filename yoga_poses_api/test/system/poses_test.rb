require "application_system_test_case"

class PosesTest < ApplicationSystemTestCase
  setup do
    @pose = poses(:one)
  end

  test "visiting the index" do
    visit poses_url
    assert_selector "h1", text: "Poses"
  end

  test "creating a Pose" do
    visit poses_url
    click_on "New Pose"

    fill_in "Category", with: @pose.category
    fill_in "Image", with: @pose.image
    fill_in "Name", with: @pose.name
    click_on "Create Pose"

    assert_text "Pose was successfully created"
    click_on "Back"
  end

  test "updating a Pose" do
    visit poses_url
    click_on "Edit", match: :first

    fill_in "Category", with: @pose.category
    fill_in "Image", with: @pose.image
    fill_in "Name", with: @pose.name
    click_on "Update Pose"

    assert_text "Pose was successfully updated"
    click_on "Back"
  end

  test "destroying a Pose" do
    visit poses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Pose was successfully destroyed"
  end
end
